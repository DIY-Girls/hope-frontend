<template>
    <div class="userInfo">
        <input type="text" v-model="name" name="name" />
        <input type="email" v-model="email" name="email" />
        <input type="text" v-model="gender" name="gender" />
        <input type="text" v-model="phone" name="phone" />
        <button @click="saveChanges">Save</button>
        <hr>
        <label>Emergency Contacts: </label>
        <div class="eContacacts" v-for="(contact, index) in emergencyContacts" v-bind:key="index">
          <!-- {{contact.name}} | {{ contact.email }} | {{ contact.phone }} -->
          <EmergencyContact v-bind:name="contact.name" :email="contact.email" :phone="contact.phone" :key="contact.email" />
          <img v-on:click="deleteContact(contact.email)" src="../assets/delete_icon.png" height="20px" width="20px"/>
        </div>
        <label><strong>Add Contact</strong></label>
        <input type="text" v-model="newContactName" name="newContactName" placeholder="Name"/>
        <input type="email" v-model="newContactEmail" name="newContactEmail" placeholder="Email"/>
        <input type="text" v-model="newContactPhone" name="phone" placeholder="Phone"/>
        <button @click="addContact">Add Contact</button>
        <hr>
        <label>Registered Hope Device</label>
        <input type="text" v-model="hopeDeviceId" value="hopeDeviceId" />
    </div>
</template>

<script>
import axios from 'axios';

import EmergencyContact from '../components/EmergencyContact';

export default {
  name: 'UserProfile',
  components: {
    EmergencyContact
  },
  data () {
    return {
      userId: '',
      name: '',
      email: '',
      phone: '',
      gender: '',
      emergencyContacts: '',
      newContactName: '',
      newContactEmail: '',
      newContactPhone: '',
      hopeDeviceId: ''
    };
  },
  computer: {
    emergencyContacts: {
      get: function () {
        console.log('This is gettning called.. ');
        return this.emergencyContacts;
      },
      set: function () {
        return this.emergencyContacts;
      }
    }
  },
  methods: {
    async addContact () {
      try {
        const userId = localStorage.getItem('userId');
        const data = {
          user_id: userId,
          name: this.newContactName,
          email: this.newContactEmail,
          phone: this.newContactPhone
        };
        const response = await axios.post('https://obscure-ridge-56951.herokuapp.com/api/users/add_contact', data);
        this.emergencyContacts = response.data.emergencyContacts;
      } catch (error) {
        console.log(error.response);
      }
    },
    async saveChanges () {
      try {
        const data = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          gender: this.gender
        };
        const response = await axios.post('https://obscure-ridge-56951.herokuapp.com/api/users/' + this.userId, data);
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    },
    async deleteContact (email) {
      try {
        const userId = localStorage.getItem('userId');
        console.log(email);
        const data = {
          email,
          user_id: userId
        };
        const response = await axios.post('https://obscure-ridge-56951.herokuapp.com/api/users/delete_contact', data);
        this.emergencyContacts = response.data.emergencyContacts;
      } catch (error) {
        console.log(error.response);
      }
    }
  },
  async beforeMount () {
    this.userId = localStorage.getItem('userId');
    try {
      const response = await axios.get('https://obscure-ridge-56951.herokuapp.com/api/users/' + this.userId);
      const data = response.data.data;
      this.name = data.name;
      this.email = data.email;
      this.phone = data.phone;
      this.gender = data.gender;
      this.emergencyContacts = data.emergency_contacts;
    } catch (error) {
      console.log(error.response);
    }
  }
};
</script>

<style scoped>
.userInfo input {
    display: block;
    margin: auto;
}
</style>

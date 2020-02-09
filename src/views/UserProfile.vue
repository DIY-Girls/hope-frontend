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
          {{contact.name}} | {{ contact.email }} || {{ contact.phone }}
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

export default {
  name: 'UserProfile',
  data () {
    return {
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
  methods: {
    async addContact () {
      const newContact = {
        name: this.newContactName,
        email: this.newContactEmail,
        phone: this.newContactPhone
      };

      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        gender: this.gender,
        emergencyContacts: [newContact]
      };

      const response = await axios.post('http://localhost:8080/api/users/5e38f1a9bf3dda4ac66a9c45', data);
      console.log(response);
    },
    async saveChanges () {
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        gender: this.gender,
        emergencyContacts: []
      };

      const response = await axios.post('http://localhost:8080/api/users/5e38f1a9bf3dda4ac66a9c45', data);
      console.log(response);
    }
  },
  async beforeMount () {
    const response = await axios.get('http://localhost:8080/api/users/5e27cf152a9cea2f09e7e311');
    const data = response.data.data;
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.gender = data.gender;
    this.emergencyContacts = data.emergency_contacts;
  }
};
</script>

<style scoped>
.userInfo input {
    display: block;
    margin: auto;
}
</style>

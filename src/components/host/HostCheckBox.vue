<template>
    <div class="checkboxDiv">
        <input type="checkbox" 
            name="roomAmenities" 
            :checked="checked"
            :id="'check_' + name"
            :value="name">
        <label :for="'check_' + name">{{ value }}</label>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HostCheckbox',
    props: {
      name: String,
      value: String,
      checked: {
        type: Boolean,
        default: false
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .checkboxDiv {
    grid-template-rows: subgrid;
    min-width: 100px;
    margin-left: 10px;
    margin-right: 10px;
  }
  </style>
  
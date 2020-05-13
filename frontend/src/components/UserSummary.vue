<template>
  <ul class="list-group">
    <li class="list-group-item">
      <div class="row">
        <div class="col-sm-5"><strong>Наименование организации:</strong></div>
        <div class="col-sm-5">{{ user.name }}</div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <div class="col-sm-5"><strong>Public key:</strong></div>
        <div class="col-sm-5">
          <code>{{ user.key }}</code>
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <div class="col-sm-5"><strong>Инн организации:</strong></div>
        <div class="col-sm-5">{{ user.inn }}</div>
      </div>
    </li>
    <li v-if="user.last_fillup" class="list-group-item">
      <div class="row">
        <div class="col-sm-5"><strong>Last issue:</strong></div>
        <div class="col-sm-5">{{ $moment.getDate(user.last_fillup) }}</div>
      </div>
    </li>
    <li v-if="user.public_key === keyPair.publicKey && user.last_fillup" class="list-group-item">
      <div class="row">
        <div class="col-sm-5"><strong>Available to issue:</strong></div>
        <div class="col-sm-5">
          <countdown :from="$moment.toTimestamp(user.last_fillup)" :timeout="60" :text="'right now!'"/>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  import { mapState } from 'vuex'
  import Countdown from '../components/Countdown.vue'

  module.exports = {
    components: {
      Countdown
    },
    name: 'user-summary',
    props: ['user'],
    computed: mapState({
      keyPair: state => state.keyPair
    })
  }
</script>

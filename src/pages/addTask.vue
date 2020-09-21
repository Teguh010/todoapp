<template>
  <q-page padding>
      <div class="q-py-md">
       <q-banner  inline-actions class="text-white bg-red">
     Add  Task
      <template v-slot:action>
        <q-btn to="/" color="white" class="text-red" label="Back To tasks" />
      </template>
    </q-banner>
    </div>
    <q-form @submit="onSubmit" @reset="onReset">
      <q-card class="my-card">
        <q-card-section>
          <div class="column q-gutter-x-sm">
            <div class="q-pt-sm q-pb-md">
              <div class="bg-grey-3" style="border-radius: 10px;">
                <q-input
                clearable
                  v-model="name"
                  style="font-size: 20px"
                  borderless
                  class="q-px-md"
                >
                </q-input>
              </div>
            </div>
            <div class="bg-grey-3" style="border-radius: 10px;">
              <q-input
              clearable
                v-model="dueDate"
                borderless
                class="q-px-md"
                style="font-size: 20px"
              >
                <template v-slot:append>
                  <q-icon name="today" style="" class="cursor-pointer">
                    <q-popup-proxy
                      @before-show="updateProxyDate"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="dueDate" color="blue">
                        <div
                          class="row items-center justify-center q-gutter-sm"
                        >
                          <div class="col">
                            <q-btn
                              label="Cancel"
                              style="border-radius: 10px;"
                              class="bg-red text-white full-width"
                              flat
                              v-close-popup
                            />
                          </div>
                          <div class="col">
                            <q-btn
                              label="OK"
                              class="bg-blue text-white full-width"
                              style="border-radius: 10px;"
                              flat
                              v-close-popup
                            />
                          </div>
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="q-pt-md">
              <div class="bg-grey-3 " style="border-radius: 10px;">
                <q-input
                clearable
                  style="font-size: 20px"
                  v-model="dueTime"
                  borderless
                  class="q-px-md"
                >
                  <template v-slot:append>
                    <q-icon name="schedule" style="" class="cursor-pointer">
                      <q-popup-proxy
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-time v-model="dueTime" format24h>
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="row q-gutter-x-sm">
            <div class="col-8">
              <q-btn
                style="height: 50px; border-radius: 10px;"
                class="full-width bg-red"
                v-close-popup
                flat
                 @click="onReset"
                color="white"
                label="Cancel"
              />
            </div>
            <div class="col">
              <q-btn
                style="height: 50px; border-radius: 10px;"
                class="full-width bg-blue"
                v-close-popup
                flat
                type="submit"
                color="white"
                label="save"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>
import {db} from '../firebase/init'
export default {
  data() {
    return {
      name: "",
      dueDate: "",
      dueTime: "",
      completed: false,
      proxyDate: ""
    };
  },
  methods: {
    updateProxyDate() {
      this.proxyDate = this.dueDate;
    },
    onSubmit () {
      if (this.name == '' || this.dueDate == '' || this.dueTime == '') {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Please fill the fields correctly!'
        })
      }
      else {
          db.collection('tasks').add({
              name: this.name,
              dueDate: this.dueDate,
              dueTime: this.dueTime,
              completed: this.completed

          }).then(() => {
              this.$router.push({ name: 'pageTodo'})
          })
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },
     onReset () {
     this.$router.push({ name: 'pageTodo'})
    }
  }
};
</script>

<style></style>

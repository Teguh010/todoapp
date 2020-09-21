<template>
  <q-page class="q-pa-md">
    <div class="q-pt-md">
		<q-list 
			separator
			bordered>

		  <q-item 
		  	v-for="task in tasks"
		  	:key="task.id"
		  	@click="task.completed = !task.completed"
		  	:class="!task.completed ? 'bg-orange-2' : 'bg-green-3'"
		  	clickable
		  	v-ripple>
		    <q-item-section side top>
		      <q-checkbox v-model="task.completed" />
		    </q-item-section>

		    <q-item-section>
		      <q-item-label
		      	:class="{ 'text-strikethrough' : task.completed }">
		      	{{ task.name }}
		      </q-item-label>
		    </q-item-section>

		    <q-item-section side>
		    	<div class="row">
		    		<div class="column justify-center">
				    	<q-icon 
				    		name="event"
				    		size="18px"
				    		class="q-mr-xs" />
		    		</div>
			    	<div class="column">
		          <q-item-label 
		          	class="row justify-end"
		          	caption>
		          	{{ task.dueDate }}
		          </q-item-label>
		          <q-item-label
		          	class="row justify-end"
		          	caption>
		          	<small>{{ task.dueTime }}</small>
		          </q-item-label>
			    	</div>
		    	</div>
        </q-item-section>
           <q-item-section side>
             <div class="row">
      <q-btn
      @click.stop
      :to="{ name: 'editTask', params: {id: task.id}}"
        flat
        round
        dense
        color="blue"
        icon="edit" />
         <q-btn
         @click.stop="promptToDelete(task.id)"
        flat
        round
        dense
        color="red"
        icon="delete" />
        </div>
    </q-item-section>
		  </q-item>

		</q-list>
    </div>
  </q-page>
</template>

<script>
import {db} from '../firebase/init'

	export default {
		data() {
			return {
				tasks: []
			}
    },
    created() {
      // fetch data from firestore
      db.collection('tasks').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let task = doc.data()
          task.id = doc.id
          this.tasks.push(task)
        })
      })
    },
    methods: {
      deleteTask(id) {
        db.collection('tasks').doc(id).delete()
        .then(() => {
          this.tasks = this.tasks.filter(task => {
            return task.id != id
          })
        })
      },
        promptToDelete(id) {
        this.$q.dialog({
          title: 'Confirm',
          message: 'Really delete?',
          ok: {
            push: true
          },
          cancel: {
            color: 'negative'
          },
          persistent: true
        }).onOk(() => {
          this.deleteTask(id)
        })
      }
    },
       
	}
</script>

<style>
	
</style>

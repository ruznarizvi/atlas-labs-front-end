<template>
  <!-- <img alt="Vue logo" /> -->
  <div class="all-tasks">
    <div class="container">
      <h1>All Tasks</h1>
      <div class="row">
        <div class="column" v-for="task in tasks" :key="task.id">
          <div class="card">
            <h1 class="card-title">{{ task.name }}</h1>

            <!-- dropdown menu for removing-->
            <div
              class="dropdown"
              style="float: right; margin-top: -2rem; margin-right: -1rem"
            >
              <button class="dropbtn">
                <span class="three-dots">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-three-dots-vertical"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                    />
                  </svg>
                </span>
              </button>

              <div class="dropdown-content">
                <!-- delete task -->

                <router-link :to="'/update-task/' + task.id">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pen-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"
                    />
                  </svg> </router-link
                ><br />
                <a @click="deleteTask(task.id)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash3-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
                    /></svg
                ></a>
              </div>
            </div>
            <p>
              {{ task.description }}
            </p>
            <div style="margin-left: 48%">
              <div class="date">
                {{ task.date }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="">
      <button class="add-btn" @click="showAddTaskModal()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height="20px"
          fill="currentColor"
          class="bi bi-plus"
          viewBox="0 0 18 10"
        >
          <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          />
        </svg>
        Add Task
      </button>
    </div>

    <!-- add task modal -->

    <modal
      name="add-task"
      style="top: 10px; margin: 0 auto; border-radius: 16px"
      width="45%"
      height="80%"
      :adaptive="true"
    >
      <div class="">
        <div class="modal-body-cart">
          <form style="width: 90% !important; border: 0; box-shadow: none">
            <div @click="hide()">
              <span class="close">&#10006;</span>
            </div>
            <h1 id="cartLabel" style="margin: 1rem">Add Task</h1>
            <br />
            <div>
              <div>
                <label
                  style="
                    margin-left: 1.8rem;
                    font-size: 0.8rem;
                    font-weight: bold;
                  "
                  >Name</label
                ><br />
                <input
                  style="margin-top: 0.05rem; width: 100%"
                  type="text"
                  name="name"
                  class="Name"
                  placeholder="Name"
                  v-model="name"
                  size="50"
                />
              </div>
              <div>
                <label
                  style="
                    margin-left: 1.8rem;
                    font-size: 0.8rem;
                    font-weight: bold;
                  "
                  >Description</label
                ><br />
                <textarea
                  style="margin-top: 0.05rem; width: 100%"
                  type="text"
                  name="desc"
                  v-model="description"
                  placeholder="Description"
                  rows="8"
                />
              </div>
              <div>
                <label
                  style="
                    margin-left: 1.8rem;
                    font-size: 0.8rem;
                    font-weight: bold;
                  "
                  >Due Date</label
                ><br />
                <input
                  style="margin-top: 0.05rem; width: 100%"
                  type="date"
                  name="due"
                  v-model="date"
                  placeholder="Due Date"
                  size="50"
                />
              </div>
            </div>
            <!-- add task -->
            <div class="cart-footer">
              <button
                class="save-btn"
                type="button"
                @click.prevent="saveTask()"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AllTasks",
  components: {},
  data() {
    return {
      tasks: [],

      name: "",
      description: "",
      date: "",
    };
  },
  methods: {
    showAddTaskModal() {
      this.$modal.show("add-task");
    },
    hide() {
      this.$modal.hide("add-task");
    },

    async loadTasks() {
      await axios
        .get("http://localhost:3000/tasks")
        .then((resp) => {
          this.tasks = resp.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async saveTask() {
      await axios
        .post("http://localhost:3000/tasks", {
          name: this.name,
          description: this.description,
          date: this.date,
        })
        .then(() => {
          this.$modal.hide("add-task");
          this.loadTasks();
        })
        .catch((e) => {
          alert(e.message);
          console.log(e);
        });
    },
    async deleteTask(id) {
      await axios
        .delete("http://localhost:3000/tasks/" + id)
        .then(() => {
          // this.students = resp.data;
          this.loadTasks();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async mounted() {
    this.loadTasks();
  },
};
</script>

<style scoped>
.all-tasks {
  height: 100vh;
}
label {
  float: left;
}
.container {
  margin-top: 5rem;
  margin-left: 5rem;
  width: 85%;
}

.date {
  width: 200px;
  font-size: 13px;
  color: rgb(181, 181, 181);
}
.dropbtn {
  background-color: transparent;
  color: white;
  /* padding: 16px; */
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: transparent;
}
/* .dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
} */

.close {
  float: right;
  color: rgb(188, 187, 187);
  margin-right: -8%;
  cursor: pointer;
}

.add-btn {
  margin-top: 7%;
  float: right;
  margin-right: 10%;
  font-size: 1rem;
  padding: 13px;
  border-radius: 16px;
}

.save-btn {
  margin-top: 7%;
  margin-left: 30%;
  width: 50%;
  margin-right: 10%;
  font-size: 1rem;
  padding: 15px;
  border-radius: 16px;
}
* {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.three-dots {
  float: right;
  margin-top: -2em;
  /* width: 100%; */
  color: rgb(206, 206, 206);
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(246, 243, 243, 0.2);
  padding: 16px;
  margin-top: 1.5rem;
  text-align: center;
  background-color: #f7f7f7;
  border-radius: 12px;
}

/* .container:hover {
  box-shadow: 5px 5px 15px #e0c9cb;
} */

h1 {
  width: 100px;
  padding-top: 0rem;
  font-size: 1.2em;
  color: #343434;
  line-height: 20px;
  margin-left: 0.2rem;
  font-weight: bold;

  /* margin-top: -2px; */
}

input {
  background-color: rgb(250, 250, 250);
  border: 0;
  padding: 15px;
  color: darkgray;
  margin: 20px;
  font-size: 15px;
  border-radius: 8px;
}

textarea {
  background-color: rgb(250, 250, 250);
  border: 0;
  padding: 15px;
  color: darkgray;
  margin: 20px;
  font-size: 15px;
  border-radius: 8px;
}
.card-title {
  width: 300px;
  text-align: left;

  padding-top: 0rem;
  font-size: 1.2em;
  color: #343434;
  line-height: 20px;
  margin-left: 0.3rem;
  font-weight: bold;
}
p {
  width: 100px;
  padding-top: 0rem;
  font-size: 0.9em;
  text-align: justify;
  width: auto;
  color: #b1b1b1;
  margin-left: 0.2rem;
  line-height: 20px;
}

a {
  color: #ffffff;
  text-decoration: none;
}
a:hover {
  color: #7d7d7d;
}
</style>

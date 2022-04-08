<template>
  <div class="container">
    <h1>Update Task</h1>
    <div>
      <div>
        <label style="margin-left: 1.8rem; font-size: 0.8rem; font-weight: bold"
          >Name</label
        ><br />
        <input
          style="margin-top: 0.05rem; width: 100%"
          type="text"
          name="name"
          class="Name"
          placeholder="Name"
          v-model="task.name"
          size="50"
        />
      </div>
      <div>
        <label style="margin-left: 1.8rem; font-size: 0.8rem; font-weight: bold"
          >Description</label
        ><br />
        <textarea
          style="margin-top: 0.05rem; width: 100%"
          type="text"
          name="desc"
          v-model="task.description"
          placeholder="Description"
          rows="8"
        />
      </div>
      <div>
        <label style="margin-left: 1.8rem; font-size: 0.8rem; font-weight: bold"
          >Due Date</label
        ><br />
        <input
          style="margin-top: 0.05rem; width: 100%"
          type="date"
          name="due"
          v-model="task.date"
          placeholder="Due Date"
          size="50"
        />
      </div>
      <button class="save-btn" @click="updateTask()">Update Task</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UpdateTask",
  data() {
    return {
      task: {
        name: "",
        description: "",
        date: "",
      },
    };
  },
  async mounted() {
    await axios
      .get("http://localhost:3000/tasks/" + this.$route.params.id)
      .then((resp) => {
        this.task = resp.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    async updateTask() {
      await axios
        .put("http://localhost:3000/tasks/" + this.$route.params.id, {
          name: this.task.name,
          description: this.task.description,
          date: this.task.date,
        })
        .then((resp) => {
          this.task = resp.data;
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.container {
  width: 50%;
  height: 100vh;
  margin-left: 25%;
  text-align: left;
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

h1 {
  margin-top: 3rem;
  padding-top: 0rem;
  font-size: 1.2em;
  color: #343434;
  text-align: center;
  line-height: 20px;
  margin-left: 0.2rem;
  font-weight: bold;

  /* margin-top: -2px; */
}
</style>

<template>
  <div class="timeline">
    <div
      v-for="(event, $index) in events"
      :key="event.id"
      class="container"
      v-bind:class="{ 'left': odd($index), 'right': even($index)}">
      <div class="content">
        <h2 v-html="event.title"></h2>
        <div class="content-body">
          <p class="content-date-decor">{{event.date}}</p>
          <p v-html="event.text"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orangem-vertical-timeline',
  props: {
    events: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    odd: function (index) {
      return index % 2 !== 0
    },
    even: function (index) {
      return index % 2 === 0
    }
  }
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  /* Set a background color */
  body {
    background-color: #474e5d;
  }

  h2{
    margin: 0px;
    padding: 10px 20px;
    color: white;
    background-color: #ff9a00;
    font-size: 2rem;

    border-radius: 3px 3px 0px 0px;
  }

  p{
    font-size: 1.5rem;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline::after {
    content: '';
    position: absolute;
    width: 7px;
    background-color: #555555;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -5px;
  }

  /* Container around content */
  .container {
    position: relative;
    width: 50%;
    margin-bottom: 1rem;
    padding: 0px 4rem;
    background-color: inherit;
  }

  /* The circles on the timeline */
  .container::after {
    content: '';
    position: absolute;
    width: 2rem;
    height: 2rem;
    right: -0.95rem;
    background-color: white;
    border: 0.5rem solid #555555;
    box-shadow: 0 0 0px 0.3rem whitesmoke;
    top: 1rem;
    border-radius: 50%;
    z-index: 1;
  }

  /* Place the container to the left */
  .left {
    left: 0;
  }

  /* Place the container to the right */
  .right {
    left: 50%;
  }

  /* Add arrows to the left container (pointing right) */
  .left::before {
    content: " ";
    position: absolute;
    right: 2.1rem;
    top: 2rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #555555;
    z-index: 1;
  }

  /* Add arrows to the right container (pointing left) */
  .right::before {
    content: " ";
    position: absolute;
    left: 2.1rem;
    top: 2rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #555555;
    z-index: 1;
  }

  /* Fix the circle for containers on the right side */
  .left::after {
    top: 1rem;
    right: 0;
    margin-right: -1.3rem;
  }
  .right::after {
    top: 1rem;
    left: 0;
    margin-left: -1.6rem;
  }

  /* The actual content */
  .content {
    /*padding: 20px 30px;*/
    background-color: white;
    position: relative;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0,0,0,0.4);
  }

  .content-body{
    padding: 1rem;
    border-radius: 0px 0px 3px 3px;

    /*overflow: hidden;*/
    /*height: 10px;*/
    /*transition: height 500ms ease-in-out;*/
  }

  /*.content-body:hover {*/
    /*height: 200px;*/
  /*}*/

  .content-date-decor{
    font-weight: bold;
  }

  /* Media queries - Responsive timeline on screens less than 600px wide */
  @media screen and (max-width: 700px) {
    /* Place the timelime to the left */
    .timeline::after {
      left: 2rem;
    }

    /* Full-width containers */
    .container {
      width: 80vw;
      padding-left: 5.4rem;
      padding-right: 1rem;
    }

    /* Make sure that all arrows are pointing leftwards */
    .container::before {
      left: 3.8rem;
    }

    /* Make sure all circles are at the same spot */
    .left::after, .right::after {
      left: 0;
      margin-left: 0.35rem;
    }

    /* Make all right containers behave like the left ones */
    .right {
      left: 0;
    }
  }
</style>

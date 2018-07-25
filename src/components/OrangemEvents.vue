<template>
  <orangem-vertical-timeline id="#events" data-scroll-id="events" v-bind:events="events">
  </orangem-vertical-timeline>
</template>

<script>

import {HTTP} from './api'
import OrangemVerticalTimeline from './ui/timeline/OrangemVerticalTimeline'
import OrangemA from './gadgets/OrangemA'

export default {
  components: {
    OrangemVerticalTimeline,
    OrangemA
  },
  name: 'orangem-events',
  created () {
    HTTP.get('events.json')
      .then(resonse => {
        this.events = resonse.data
      })
      .catch(e => {
        this.errors.push(e)
        console.error(e)
      })
  },
  data () {
    return {
      // events: [
      //   {id: 12, date: 'April 2018', title: 'The conference <q>Microservice architecture and platform Azure Service Factory</q>', text: 'Participation in the conference <q>Microservice architecture and platform Azure Service Factory</q>'},
      //   {id: 11, date: 'March 2018', title: 'Domain registration <q>OranGem.em</q>', text: 'Domain registration <q>OranGem.em</q>. We are open for work and creativity!'},
      //   {id: 10, date: 'December 2017', title: 'Deploy modules and databases to AWS EC2, RDS instances', text: 'Deploy <q>Impress Application Server</q> and <q>RedButton</q> on Amazon EC2 instance. A test database is deployed on the AWS RDS'},
      //   {id: 9, date: 'December 2017', title: 'Register Amazon EC2 and RDS instances', text: 'Register Amazon Elastic Compute Cloud (Amazon EC2) and Amazon Relational Database Service (RDS) instances'},
      //   {id: 8, date: 'October 2017', title: 'YappiDays\'17 Developer Conference', text: 'The Yappi Days\'17 conference focuses on the architecture of enterprise applications, modern technologies in processing BigData data and the best practices in software development.'},
      //   {id: 7, date: 'October 2017', title: 'Training Alexei Zinoviev "Dive in Apache Spark"', text: 'In the course of the live coding training, the solution of several practical problems of data transformation and analysis, working with the latest version of Spark, discussing the analysis and increasing the productivity of the solutions obtained.'},
      //   {id: 6, date: 'May-August 2017', title: 'Akvelon BigData Hackaton', text: 'Participation in the Akvelon BigData hackathon. Prize-winner, third place'},
      //   {id: 5, date: 'December 2016', title: 'Tools for visual design of application models <q>RedButton</q>', text: 'The first application models are designed as regular JSON files. But this is a complex process. Now application models are developed in a visual modeler'},
      //   {id: 4, date: 'June 2016', title: 'The beginning of the experimental operation of the <q>RedButton</q> project.', text: 'Modeled two test applications are generated. Both applications work on the local network while solving business tasks.'},
      //   {id: 3, date: 'December 2015', title: 'Start <q>RedButton</q> project', text: '<p>Start the project to develop a platform for the rapid creation of interfaces for the display and editing of data</p><p>The working title of the <q>Red Button</q> project</p>'},
      //   {id: 2, date: 'August-November 2015', title: 'Alfa-Bank learning game', text: '<p>Participation in the development of an educational game for <a href="https://alfabank.ru/" class="a-href-link__text" target="_blank">Alfa-Bank</a> in cooperation with the company <a href="http://labmedia.su/" class="a-href-link__text" target="_blank">Labmedia</a>.</p><p>Programming, assembly, testing in accordance with the terms of reference using the submitted materials</p><p>Stack: JS, HTML, CSS, <a href="https://angularjs.org/" class="a-href-link__text" target="_blank">AngularJS</a>, <a href="https://www.isogenicengine.com/" class="a-href-link__text" target="_blank">Isogenic Game Engine</a> </p>'},
      //   {id: 1, date: 'March-July 2014', title: 'M.Video learning game, multiplayer', text: '<p>Participation in the development of a multiplayer version of the educational game for <a href="https://www.mvideo.ru/" class="a-href-link__text" target="_blank">M.Video</a> in cooperation with the company <a href="http://labmedia.su/" class="a-href-link__text" target="_blank">Labmedia</a>.</p><p>Programming, assembly, testing in accordance with the terms of reference using the submitted materials</p><p>Stack: JS, HTML, CSS, <a href="https://angularjs.org/" class="a-href-link__text" target="_blank">AngularJS</a>, <a href="https://www.isogenicengine.com/" class="a-href-link__text" target="_blank">Isogenic Game Engine</a> </p>'},
      //   {id: 0, date: 'May-August 2013', title: 'M.Video learning game', text: '<p>Participation in the development of a training game for <a :href="https://www.mvideo.ru/" class="a-href-link__text" target="_blank">M.Video</a> in cooperation with the company <a href="http://labmedia.su/" class="a-href-link__text" target="_blank">Labmedia</a>.</p><p>Programming, assembly, testing in accordance with the terms of reference using the submitted materials</p><p>Stack: JS, HTML, CSS, <a href="https://angularjs.org/" class="a-href-link__text" target="_blank">AngularJS</a>, <a href="https://www.isogenicengine.com/" class="a-href-link__text" target="_blank">Isogenic Game Engine</a> </p>'}
      // ],
      events: [
        {id: 2, date: 'August-November 2015', title: 'Alfa-Bank learning game', text: '<p>Participation in the development of an educational game for <a href="https://alfabank.ru/" class="a-href-link__text" target="_blank">Alfa-Bank</a> in cooperation with the company <a href="http://labmedia.su/" class="a-href-link__text" target="_blank">Labmedia</a>.</p><p>Programming, assembly, testing in accordance with the terms of reference using the submitted materials</p><p>Stack: JS, HTML, CSS, <a href="https://angularjs.org/" class="a-href-link__text" target="_blank">AngularJS</a>, <a href="https://www.isogenicengine.com/" class="a-href-link__text" target="_blank">Isogenic Game Engine</a> </p>'},
        {id: 1, date: 'March-July 2014', title: 'M.Video learning game, multiplayer', text: '<p>Participation in the development of a multiplayer version of the educational game for <a href="https://www.mvideo.ru/" class="a-href-link__text" target="_blank">M.Video</a> in cooperation with the company <a href="http://labmedia.su/" class="a-href-link__text" target="_blank">Labmedia</a>.</p><p>Programming, assembly, testing in accordance with the terms of reference using the submitted materials</p><p>Stack: JS, HTML, CSS, <a href="https://angularjs.org/" class="a-href-link__text" target="_blank">AngularJS</a>, <a href="https://www.isogenicengine.com/" class="a-href-link__text" target="_blank">Isogenic Game Engine</a> </p>'},
        {id: 0, date: 'May-August 2013', title: 'M.Video learning game', text: '<p>Participation in the development of a training game for <a :href="https://www.mvideo.ru/" class="a-href-link__text" target="_blank">M.Video</a> in cooperation with the company <a href="http://labmedia.su/" class="a-href-link__text" target="_blank">Labmedia</a>.</p><p>Programming, assembly, testing in accordance with the terms of reference using the submitted materials</p><p>Stack: JS, HTML, CSS, <a href="https://angularjs.org/" class="a-href-link__text" target="_blank">AngularJS</a>, <a href="https://www.isogenicengine.com/" class="a-href-link__text" target="_blank">Isogenic Game Engine</a> </p>'}
      ],
      errors: []
    }
  }
}
</script>

<style scoped>
</style>

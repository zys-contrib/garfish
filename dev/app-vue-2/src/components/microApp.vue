<template>
  <div id="micro-app">
    <h3 data-test="title">Vue App micro App</h3>
    <el-button plain size="mini" @click="loadApp">
      加载 Vue 子应用
    </el-button>
    <el-button plain size="mini" @click="loadAppReact">
      加载 React 子应用
    </el-button>
    <div ref="vueApp" id="micro-app-container"></div>
  </div>
</template>

<script>
  // 嵌套场景
  import GarfishInstance from 'garfish';
  import portInfo from '../../../config.json';
  import { mapState } from 'vuex';

  let hasInit = false;
  export default {
    name: 'App',
    computed: mapState(
        ['basename', 'mainAppProps']
    ),

    methods: {
      async loadApp() {
        window.Garfish.router.push({ path: '/examples/vue2/micro-app/vueApp', basename: '/' })
      },
      async loadAppReact() {
        window.Garfish.router.push({ path: '/examples/vue2/micro-app/reactApp', basename: '/' })
      },
    },

    mounted() {
      if (hasInit) return;
      hasInit = true;

      const apps = this.mainAppProps.store.apps;
      const react16_entry = process.env.NODE_ENV === 'production'
        ? apps.find(v => v.name === 'react16').entry
        : `http://localhost:${portInfo['dev/react16'].port}`;
      const vueSub_entry = process.env.NODE_ENV === 'production'
        ? apps.find(v => v.name === 'vue-sub').entry
        : `http://localhost:${portInfo['dev/vue-sub'].port}`;

      GarfishInstance.registerApp([
        {
          name: 'vueApp',
          entry: vueSub_entry,
          basename: `/${this.basename}/micro-app`,
          activeWhen: '/vueApp',
          domGetter: '#micro-app-container',
          cache: false,
          props: {
            helloWorld: false,
          },
        },
        {
          name: 'reactApp',
          entry: react16_entry,
          basename: `/${this.basename}/micro-app`,
          domGetter: '#micro-app-container',
          activeWhen: '/reactApp',
          cache: false,
        },
      ]);
    }
  }
</script>

<style lang="less">
  #micro-app-container {
    width: 800px;
    height: 400px;
    margin: 40px auto;
  }
</style>

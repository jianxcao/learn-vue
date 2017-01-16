<template>
  <div>
    <child v-bind:test1="cjx" class="test">
      <p>test</p><p slot="test">have name</p>
    </child>
  </div>
</template>
<script>
var sonChild = {
  props: {
    test1: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      msg: '111'
    }
  },
  created () {
    console.log('sonChild', this, this.$data)
  },
  template: '<div class="sonChild">{{msg}}{{test1}}<div>'
}
var child = {
  functional: false,
  name: 'cjx-test',
  data () {
    return {
      // data中可以直接跟模板，或者组件
      title: {
        template: '<div>我是头</div>'
      },
      content: {
        template: '<div>我是content</div>'
      },
      footer: {
        template: '<div>我是尾巴</div>'
      },
      // home值变化则模板变化，在components中
      current: 'home'
    }
  },
  methods: {
    test () {
      console.log(this)
    }
  },
  created () {
    console.log('child created')
  },
  render (createElement, context) {
    console.log(context)
    console.log('**********', this.content)
    return createElement('sonChild', {
      class: {
        foo: true,
        bar: false
      },
      props: {
        test1: 'MSG'
      },
      attrs: {
        'data-cjx': 'cjx2'
      },
      nativeOn: {
        click: function () {
          console.log(11111)
        }
      }
    })
  },
  components: {
    sonChild
  }
}
// , [
//       createElement('h1', 'hello world'),
//       'test'
//     ]

export default {
  name: 'learn9',
  data () {
    return {
      cjx: 'test'
    }
  },
  components: {
    child
  }
}
</script>



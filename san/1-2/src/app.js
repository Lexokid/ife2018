import san from 'san'

import helloWorld from '@/ui/hello.san'

import {router} from 'san-router'

router.add({
  rule: '/',
  Component: helloWorld,
  target: '#app'
})

router.start()

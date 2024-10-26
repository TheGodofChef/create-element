import type {Plugin} from 'vue'
import {  describe, expect, it } from "vitest";
import {
  CtAlert,
  CtButton,
  CtButtonGroup,
  CtCollapse,
  CtCollapseItem,
  CtIcon
} from '..'
import { get, map } from 'lodash-es';

const comps = [
  CtAlert,
  CtButton,
  CtButtonGroup,
  CtCollapse,
  CtCollapseItem,
  CtIcon
] as Plugin[]

describe('components/index', () => {
  it.each(map(comps, (c) => [get(c, 'name')?? '', c]))(
    '%s should be exportEd', 
    (_, components) => {
      expect(components).toBeDefined()
      expect(components.install).toBeDefined()
    }
  )
  
})
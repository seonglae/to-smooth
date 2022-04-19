import { defineConfig, Options } from 'tsup'

const baseConfig: Options = {
  entry: ['src/index.ts'],
  outDir: 'dist',
  target: 'es2015',
  platform: 'browser',
  format: ['esm', 'cjs', 'iife'],
  splitting: true
}

export default defineConfig({
  ...baseConfig,
  outDir: 'dist',
  shims: true,
  dts: true,
  minify: true,
  sourcemap: true
})

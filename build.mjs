import dts from 'bun-plugin-dts';

// eslint-disable-next-line no-undef
await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  minify: true,
  plugins: [dts()],
  format: 'esm'
});

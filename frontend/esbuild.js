const esbuild = require('esbuild');

async function start() {
  const ctx = await esbuild.context({
    entryPoints: ['./main.jsx'],
    bundle: true,
    outfile: './dist/bundle.js',
    loader: { '.jsx': 'jsx', '.css': 'css' },
    sourcemap: true,
    minify: false,
    platform: 'browser',
    target: ['esnext'],
  });
  if (process.argv.includes('--watch')) {
    await ctx.watch();
    console.log('Watching for changes...');
  } else {
    await ctx.rebuild();
    await ctx.dispose();
    console.log('Build complete.');
  }
}

start(); 
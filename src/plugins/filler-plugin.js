// plugins/filler-plugin.js
export default {
  install(app, { Chart }) {
    Chart.plugins.register({
      afterDatasetsDraw: (chart) => {
        const ctx = chart.ctx;
        const datasets = chart.data.datasets;

        for (let i = 0; i < datasets.length; i++) {
          const dataset = datasets[i];
          const meta = chart.getDatasetMeta(i);
          const style = dataset.fillColor || dataset.backgroundColor || '#000';

          if (meta.hidden) continue;

          ctx.save();
          ctx.fillStyle = style;
          ctx.beginPath();

          for (let j = 0; j < meta.data.length; j++) {
            const model = meta.data[j]._model;
            const yScale = meta.vScale;
            const y = yScale.getPixelForValue(dataset.data[j]);

            if (j === 0) {
              ctx.moveTo(model.x, y);
            } else {
              ctx.lineTo(model.x, y);
            }
          }

          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
      },
    });
  },
};

<template>
  <div class="detail-container">
    <h3>销售趋势</h3>
    <div class="chart-container">
      <!-- 简单的SVG图表 -->
      <svg width="100%" height="200" viewBox="0 0 400 200">
        <path d="M0,100 L40,80 L80,110 L120,70 L160,90 L200,50 L240,80 L280,40 L320,60 L360,30 L400,50" 
              fill="none" stroke="#3B82F6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="40" cy="80" r="5" fill="#3B82F6" />
        <circle cx="80" cy="110" r="5" fill="#3B82F6" />
        <circle cx="120" cy="70" r="5" fill="#3B82F6" />
        <circle cx="160" cy="90" r="5" fill="#3B82F6" />
        <circle cx="200" cy="50" r="5" fill="#3B82F6" />
        <circle cx="240" cy="80" r="5" fill="#3B82F6" />
        <circle cx="280" cy="40" r="5" fill="#3B82F6" />
        <circle cx="320" cy="60" r="5" fill="#3B82F6" />
        <circle cx="360" cy="30" r="5" fill="#3B82F6" />
        <circle cx="400" cy="50" r="5" fill="#3B82F6" />
      </svg>
    </div>
    <p class="text-sm text-gray-500">过去30天的销售数据</p>
  </div>
</template>

<script>
export default {
  name: 'DashboardDetail'
}
</script>

<style scoped>
.detail-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.chart-container {
  height: 200px;
  background-color: #f9f9f9;
  border-radius: 6px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>  
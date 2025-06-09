<template>
  <div class="view-container">
    <h2>仪表盘</h2>
    <h3>id:{{ id }}</h3>
    <div class="stats-grid">
      <div class="stat-card">
        <p class="text-green-700 font-medium">收入</p>
        <p class="text-2xl font-bold">¥12,450.00</p>
      </div>
      <div class="stat-card">
        <p class="text-blue-700 font-medium">订单</p>
        <p class="text-2xl font-bold">245</p>
      </div>
      <div class="stat-card">
        <p class="text-yellow-700 font-medium">用户</p>
        <p class="text-2xl font-bold">1,280</p>
      </div>
      <div class="stat-card">
        <p class="text-red-700 font-medium">退货</p>
        <p class="text-2xl font-bold">18</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  props:['id']
}
</script>

<style scoped>
.view-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 20px;
}

.stat-card {
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
</style>  
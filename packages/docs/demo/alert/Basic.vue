<template>
  <h2>通过 slot 传入内容</h2>
  <div style="max-width: 600px">
    <ct-alert type="success">Success alert</ct-alert>
    <ct-alert type="info">Info alert</ct-alert>
    <ct-alert type="warning">Warning alert</ct-alert>
    <ct-alert type="danger">Error alert</ct-alert>
  </div>
  <h2>通过 prop 传入内容</h2>
  <div style="max-width: 600px">
    <ct-alert type="success" title="Success alert" />
    <ct-alert type="info" title="Info alert" />
    <ct-alert type="warning" title="Warning alert" />
    <ct-alert type="danger" title="Error alert" />
  </div>
</template>

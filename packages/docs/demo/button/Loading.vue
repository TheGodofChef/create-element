<template>
  <div>
    <ct-button type="primary" loading>Loading</ct-button>
    <ct-button type="primary" loading-icon="circle-notch" loading>Loading</ct-button>
    <ct-button type="primary" loading>
      <template #loading>
        <ct-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </ct-button>
  </div>
</template>

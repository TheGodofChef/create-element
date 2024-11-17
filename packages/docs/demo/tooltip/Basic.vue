<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <ct-tooltip class="box-item" content="Top Left prompts info" placement="top-start">
        <ct-button>top-start</ct-button>
      </ct-tooltip>
      <ct-tooltip class="box-item" content="Top Center prompts info" placement="top">
        <ct-button>top</ct-button>
      </ct-tooltip>
      <ct-tooltip class="box-item" content="Top Right prompts info" placement="top-end">
        <ct-button>top-end</ct-button>
      </ct-tooltip>
    </div>
    <div class="row">
      <ct-tooltip class="box-item" content="Left Top prompts info" placement="left-start">
        <ct-button>left-start</ct-button>
      </ct-tooltip>
      <ct-tooltip class="box-item" content="Right Top prompts info" placement="right-start">
        <ct-button>right-start</ct-button>
      </ct-tooltip>
    </div>
    <div class="row">
      <ct-tooltip class="box-item" content="Left Center prompts info" placement="left">
        <ct-button class="mt-3 mb-3">left</ct-button>
      </ct-tooltip>
      <ct-tooltip class="box-item" content="Right Center prompts info" placement="right">
        <ct-button>right</ct-button>
      </ct-tooltip>
    </div>
    <div class="row">
      <ct-tooltip class="box-item" content="Left Bottom prompts info" placement="left-end">
        <ct-button>left-end</ct-button>
      </ct-tooltip>
      <ct-tooltip class="box-item" content="Right Bottom prompts info" placement="right-end">
        <ct-button>right-end</ct-button>
      </ct-tooltip>
    </div>
    <div class="row center">
      <ct-tooltip class="box-item" content="Bottom Left prompts info" placement="bottom-start">
        <ct-button>bottom-start</ct-button>
      </ct-tooltip>
      <ct-tooltip class="box-item" content="Bottom Center prompts info" placement="bottom">
        <ct-button>bottom</ct-button>
      </ct-tooltip>
      <ct-tooltip class="box-item" content="Bottom Right prompts info" placement="bottom-end">
        <ct-button>bottom-end</ct-button>
      </ct-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}

.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tooltip-base-box .center {
  justify-content: center;
}

.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  process: [
    'process',                  // 모든 프로젝트를 한번에 볼 수 있도록 핵심만 표시
    {
      type: 'category',
      label: 'A-SPICE',
      collapsed: false,
      items: [
        'process/aspice_cl2',    // 각 프로젝트 상세 내용을 기술
        'process/aspice_cl3',
      ],
    },
    {
      type: 'category',
      label: 'Design',
      collapsed: false,
      items: [
        'process/iso26262',
        'process/sunroof_system_design',
      ],
    },
    {
      type: 'category',
      label: 'Management',
      collapsed: false,
      items: [
        'process/redmine',
        'process/agile_by_github',
        'process/agile_by_mbd',
      ],
    },
  ],
  mbd: [
    'mbd',
    {
      type: 'category',
      label: 'Ready',
      collapsed: false,
      items: [
        'mbd/window_autobox',
        'mbd/traindoor_uml',
      ],
    },
    {
      type: 'category',
      label: 'Action',
      collapsed: false,
      items: [
        'mbd/temperature',
        'mbd/wiper',
        'mbd/window',
        'mbd/kalman_filter',
      ],
    },
  ],
  embedded: [
    'embedded',
    {
      type: 'category',
      label: 'Firmware',
      collapsed: false,
      items: [
        'embedded/paper',
        'embedded/study',
        'embedded/Iap',
        'embedded/python',
        'embedded/esp32',
      ],
    },
    {
      type: 'category',
      label: 'OS',
      collapsed: false,
      items: [
        'embedded/linux',
        'embedded/train_door',
      ],
    },
  ],
  example: [
    'example',
    {
      type: 'category',
      label: '와이퍼 프로젝트',
      collapsed: false,
      items: [
        'example/wiper/wiper_plan',
        'example/wiper/wiper_devenv',
        'example/wiper/wiper_verify',
      ],
    },
    {
      type: 'category',
      label: '윈도우 프로젝트',
      collapsed: false,
      items: [
        'example/window/window_design',
        {
          type: 'category',
          label: '구현',
          collapsed: false,
          items: [
            'example/window/window_realize_f0_PlantModeling',
            'example/window/window_realize_f0_VelMeasure',
            'example/window/window_realize_f1_AutoManual',
            'example/window/window_realize_f2_Profiling',
            'example/window/window_realize_f3_FeedbackControl',
            'example/window/window_realize_f4_Initialize',
            'example/window/window_realize_f5_SoftStop',
            'example/window/window_realize_f6_AntiPinch',
            'example/window/window_realize_f7_KalmanFilter',
          ],
        },
        'example/window/window_verify',
      ],
    },
  ],
};
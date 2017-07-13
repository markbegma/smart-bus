module.exports = {
  /* 4.1 Scene */

  // 4.1.1 Scene Control
  '0x0002': {
    data: new Buffer('0403', 'hex'),
    object: { area: 4, scene: 3 }
  },

  // 4.1.2 Scene Control Response
  '0x0003': [
    {
      data: new Buffer('0201060A', 'hex'),
      object: { area: 2, scene: 1, channels: [
        { number: 1, status: false },
        { number: 2, status: true },
        { number: 3, status: false },
        { number: 4, status: true },
        { number: 5, status: false },
        { number: 6, status: false }
      ] }
    },
    {
      data: new Buffer('02010608', 'hex'),
      object: { area: 2, scene: 1, channels: [
        { number: 1, status: false },
        { number: 2, status: false },
        { number: 3, status: false },
        { number: 4, status: true },
        { number: 5, status: false },
        { number: 6, status: false }
      ] }
    }
  ],

  // 4.1.3 Read Status of Scene
  '0x000C': {
    data: new Buffer('06', 'hex'),
    object: { area: 6 }
  },

  // 4.1.4 Response Read Status of Scene
  '0x000D': {
    data: new Buffer('06FE', 'hex'),
    object: { area: 6, scene: 254 }
  },

  // 4.1.5 Broadcast Status of Scene
  '0xEFFF': {
    data: new Buffer('04FEFEFEFE060B', 'hex'),
    object: {
      areas: [
        { number: 1, scene: 254 },
        { number: 2, scene: 254 },
        { number: 3, scene: 254 },
        { number: 4, scene: 254 }
      ],
      channels: [
        { number: 1, status: true },
        { number: 2, status: true },
        { number: 3, status: false },
        { number: 4, status: true },
        { number: 5, status: false },
        { number: 6, status: false },
      ]
    }
  },

  // 4.1.6 Read Area Information

  // 4.1.7 Response Read Area Information
  '0x0005': {
    data: new Buffer('0269010404010200040003', 'hex'),
    object: {
      device: { type: 617, subnet: 1, id: 4 },
      areas: 4,
      channels: [
        { number: 1, area: 1 },
        { number: 2, area: 2 },
        { number: 3, area: 0 },
        { number: 4, area: 4 },
        { number: 5, area: 0 },
        { number: 6, area: 3 }
      ]
    }
  },

  // 4.1.8 Read Scene Information
  '0x0000': {
    data: new Buffer('0102', 'hex'),
    object: { area: 1, scene: 2 }
  },

  // 4.1.9 Read Scene Information Response
  '0x0001': [
    {
      data: new Buffer('010205AD326464323232', 'hex'),
      object: { area: 1, scene: 2, time: 1453, channels: [
        { number: 1, level: 50 },
        { number: 2, level: 100 },
        { number: 3, level: 100 },
        { number: 4, level: 50 },
        { number: 5, level: 50 },
        { number: 6, level: 50 },
      ] }
    },
    {
      data: new Buffer('010305A032646432', 'hex'),
      object: { area: 1, scene: 3, time: 1440, channels: [
        { number: 1, level: 50 },
        { number: 2, level: 100 },
        { number: 3, level: 100 },
        { number: 4, level: 50 }
      ] }
    }
  ],

  // 4.1.10 Modify Scene Information

  // 4.1.11 Response Modify Scene Information
  // TODO: add test

  /* 4.2 Sequence */

  // 4.2.1 Sequence Control
  '0x001A': {
    data: new Buffer('0102', 'hex'),
    object: { area: 1, sequence: 2 }
  },

  // 4.2.2 Response Sequence Control
  '0x001B': {
    data: new Buffer('020A', 'hex'),
    object: { area: 2, sequence: 10 }
  },

  // 4.2.3 Read Status of Sequence
  '0xE014': {
    data: new Buffer('08', 'hex'),
    object: { area: 8 }
  },

  // 4.2.4 Response Read Status of Sequence
  '0xE015': {
    data: new Buffer('08A0', 'hex'),
    object: { area: 8, sequence: 160 }
  },

  // 4.2.5 Broadcast Status of Sequence
  '0xF036': {
    data: new Buffer('0A050B370163', 'hex'),
    object: { areas: [
      { number: 1, sequence: 10 },
      { number: 2, sequence: 5 },
      { number: 3, sequence: 11 },
      { number: 4, sequence: 55 },
      { number: 5, sequence: 1 },
      { number: 6, sequence: 99 }
    ] }
  },

  /* 4.3 Channels */

  // 4.3.1 Single Channel Control
  '0x0031': {
    data: new Buffer('04640190', 'hex'),
    object: { channel: 4, level: 100, time: 400 }
  },

  // 4.3.2 Response Single Channel Control
  '0x0032': [
    {
      data: new Buffer('0AF864', 'hex'),
      object: { channel: 10, level: 100, success: true }
    },
    {
      data: new Buffer('06F532', 'hex'),
      object: { channel: 6, level: 50, success: false }
    }
  ],

  // 4.3.3 Read Status of Channels
  // '0x0033'

  // 4.3.4 Response Read Status of Channels
  '0x0034': {
    data: new Buffer('06643250006428', 'hex'),
    object: { channels: [
      { number: 1, level: 100 },
      { number: 2, level: 50 },
      { number: 3, level: 80 },
      { number: 4, level: 0 },
      { number: 5, level: 100 },
      { number: 6, level: 40 }
    ] }
  },

  // 4.3.5 Read Current Level of Channels
  // '0x0038'

  // 4.3.6 Response Read Current Level of Channels
  '0x0039': {
    data: new Buffer('06643250006428', 'hex'),
    object: { channels: [
      { number: 1, level: 100 },
      { number: 2, level: 50 },
      { number: 3, level: 80 },
      { number: 4, level: 0 },
      { number: 5, level: 100 },
      { number: 6, level: 40 }
    ] }
  },

  /* 6. Universal Switch */

  // 6.1.1 UV Switch Control
  '0xE01C': [
    { data: new Buffer('10FF', 'hex'), object: { switch: 16, status: true } },
    { data: new Buffer('0500', 'hex'), object: { switch: 5, status: false } }
  ],

  // 6.1.2 Response UV Switch Control
  '0xE01D': [
    { data: new Buffer('0A01', 'hex'), object: { switch: 10, status: true } },
    { data: new Buffer('0200', 'hex'), object: { switch: 2, status: false } }
  ],

  // 6.1.3 Read Status of UV Switch
  '0xE018': [
    { data: new Buffer('0A', 'hex'), object: { switch: 10 } },
    { data: new Buffer('05', 'hex'), object: { switch: 5 } }
  ],

  // 6.1.4 Response Read Status of UV Switch
  '0xE019': [
    { data: new Buffer('0A01', 'hex'), object: { switch: 10, status: true } },
    { data: new Buffer('0500', 'hex'), object: { switch: 5, status: false } },
  ],

  // 6.1.5 Broadcast Status of Status of UV Switches
  '0xE017': {
    data: new Buffer('06010001010000', 'hex'),
    object: { switches: [
      { number: 1, status: true },
      { number: 2, status: false },
      { number: 3, status: true },
      { number: 4, status: true },
      { number: 5, status: false },
      { number: 6, status: false }
    ] }
  },

  /* 7. Curtain Switch */

  // 7.1.1 Curtain Switch Control
  '0xE3E0': [
    { data: new Buffer('0102', 'hex'), object: { curtain: 1, status: 2 } },
    { data: new Buffer('115A', 'hex'), object: { curtain: 17, status: 90 } }
  ],

  // 7.1.2 Response Curtain Switch Control
  '0xE3E1': [
    { data: new Buffer('0102', 'hex'), object: { curtain: 1, status: 2 } },
    { data: new Buffer('115A', 'hex'), object: { curtain: 17, status: 90 } },
    { data: new Buffer('11EE', 'hex'), object: { curtain: 17, status: 238 } }
  ],

  // 7.1.3 Read Status of Curtain Switch
  '0xE3E2': { data: new Buffer('04', 'hex'), object: { curtain: 4 } },

  // 7.1.4 Response Read Status of Curtain Switch
  '0xE3E3': [
    { data: new Buffer('0102', 'hex'), object: { curtain: 1, status: 2 } },
    { data: new Buffer('115A', 'hex'), object: { curtain: 17, status: 90 } }
  ],

  // 7.1.5 Broadcast Status of Status of Curtain Switches
  '0xE3E4': {
    data: new Buffer('00000201', 'hex'),
    object: { curtains: [
      { number: 1, level: 0, status: 2 },
      { number: 2, level: 0, status: 1 }
    ] }
  },

  /* 11.1 Floor Heating Control from DLP */

  // 11.1.1 Read Floor Heating Status
  // '0x1944'

  // 11.1.2 Response Read Floor Heating Status
  '0x1945': {
    data: new Buffer('001800011414141401', 'hex'),
    object: {
      temperature: {
        type: 0,
        current: 24,
        normal: 20,
        day: 20,
        night: 20,
        away: 20
      },
      status: false,
      mode: 1,
      timer: 1
    }
  },

  // 11.1.3 Control Floor Heating Status
  '0x1946': {
    data: new Buffer('00010116161412', 'hex'),
    object: {
      temperature: {
        type: 0,
        normal: 22,
        day: 22,
        night: 20,
        away: 18
      },
      status: true,
      mode: 1
    }
  },

  // 11.1.4 Response Control Floor Heating Status
  '0x1947': {
    data: new Buffer('F800010116161412', 'hex'),
    object: {
      success: true,
      temperature: {
        type: 0,
        normal: 22,
        day: 22,
        night: 20,
        away: 18
      },
      status: true,
      mode: 1
    }
  },

  /* 11.2 Floor Heating Control from Floor Heating Module */

  // 11.2.1 Read Floor Heating Status
  '0x1C5E': [
    { data: new Buffer('01', 'hex'), object: { channel: 1 } },
    { data: new Buffer('0A', 'hex'), object: { channel: 10 } },
  ],

  // 11.2.2 Response Read Floor Heating Status
  '0x1C5F': {
    data: new Buffer('012100021818161400011E010A', 'hex'),
    object: {
      channel: 1,
      work: { type: 2, status: true },
      temperature: { type: 0, normal: 24, day: 24, night: 22, away: 20 },
      mode: 2,
      timer: 0,
      valve: true,
      PWD: 30,
      watering: { type: 0, status: true, time: 10 }
    }
  },

  // 11.2.3 Control Floor Heating Status
  '0x1C5C': {
    data: new Buffer('0121000218181614010A', 'hex'),
    object: {
      channel: 1,
      work: { type: 2, status: true },
      temperature: { type: 0, normal: 24, day: 24, night: 22, away: 20 },
      mode: 2,
      valve: true,
      watering: { time: 10 }
    }
  },

  // 11.2.4 Response Control Floor Heating Status
  '0x1C5D': {
    data: new Buffer('0121000218181614010A', 'hex'),
    object: {
      channel: 1,
      work: { type: 2, status: true },
      temperature: { type: 0, normal: 24, day: 24, night: 22, away: 20 },
      mode: 2,
      valve: true,
      watering: { time: 10 }
    }
  },

  /* 13.1 Read Temperature */

  // 13.1.1 Read Temperature
  '0xE3E7': [
    { data: new Buffer('01', 'hex'), object: { channel: 1 } },
    { data: new Buffer('FF', 'hex'), object: { channel: 255 } }
  ],

  // 13.1.2 Response Read Temperature
  '0xE3E8': [
    {
      data: new Buffer('0100', 'hex'),
      object: { channel: 1, temperature: 0 }
    },
    {
      data: new Buffer('0116', 'hex'),
      object: { channel: 1, temperature: 22 }
    },
    {
      data: new Buffer('018F', 'hex'),
      object: { channel: 1, temperature: -15 }
    },
  ],

  // 13.1.3 Broadcast Temperature
  '0xE3E5': [
    {
      data: new Buffer('011B0000D841', 'hex'),
      object: { channel: 1, temperature: 27 }
    },
    {
      data: new Buffer('01190000C841', 'hex'),
      object: { channel: 1, temperature: 25 }
    }
  ],

  /* 13.2 Read Temperature New */

  // 13.2.1 Read Temperature New
  '0x1948': {
    data: new Buffer('01', 'hex'),
    object: { channel: 1 }
  },

  // 13.2.2 Response Temperature
  '0x1949': [
    {
      data: new Buffer('019A99C141', 'hex'),
      object: { channel: 1, temperature: 24.200000762939453 }
    },
    {
      data: new Buffer('010000B441', 'hex'),
      object: { channel: 1, temperature: 22.5 }
    }
  ]
};

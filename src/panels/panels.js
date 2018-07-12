import React from 'react';

import History from '../containers/PanelContent/HistoryCntr';
import Character from '../containers/PanelContent/CharacterCntr';
import Paragraph from '../containers/PanelContent/ParagraphCntr';
import Color from '../containers/PanelContent/ColorCntr';
import Swatches from '../containers/PanelContent/SwatchesCntr';
import Layers from '../containers/PanelContent/LayersCntr';

export default {
  '1': [
    {
      id: 1,
      tabs: [
        { name: 'History', content: <History />, menu: ['option'] }
      ],
      tab: 0,
      isHidden: true,
      isRemoved: false
    },
    {
      id: 2,
      tabs: [
        { name: 'Character', content: <Character />, menu: ['option'] },
        { name: 'Paragraph', content: <Paragraph />, menu: ['option'] }
      ],
      tab: 0,
      isHidden: true,
      isRemoved: false
    }
  ],
  '2': [
    {
      id: 1,
      tabs: [
        { name: 'Color', content: <Color/>, menu: ['Hue Box', 'RGB Sliders', 'HSL Sliders', 'CMYK Sliders', 'Lab Sliders'] },
        { name: 'Swatches', content: <Swatches/>, menu: ['option'] }
      ],
      tab: 0,
      isHidden: true,
      isRemoved: false
    },
    {
      id: 2,
      tabs: [
        { name: 'Layers', content: <Layers />, menu: ['option'] }
      ],
      tab: 0,
      isHidden: true,
      isRemoved: false
    }
  ]
};

/* className proptery is optional */
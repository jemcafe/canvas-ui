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
        { name: 'History', content: <History /> }
      ],
      tab: 0,
      menu: [],
      isHidden: true,
      isRemoved: false
    },
    {
      id: 2,
      tabs: [
        { name: 'Character', content: <Character /> },
        { name: 'Paragraph', content: <Paragraph /> }
      ],
      tab: 0,
      menu: [],
      isHidden: true,
      isRemoved: false
    }
  ],
  '2': [
    {
      id: 1,
      tabs: [
        { name: 'Color', content: <Color/> },
        { name: 'Swatches', content: <Swatches/> }
      ],
      tab: 0,
      menu: [],
      isHidden: true,
      isRemoved: false
    },
    {
      id: 2,
      tabs: [
        { name: 'Layers', content: <Layers /> }
      ],
      tab: 0,
      menu: [],
      isHidden: true,
      isRemoved: false
    }
  ]
};
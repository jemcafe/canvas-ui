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
      tabs: ['History'],
      children: <History />,
      tab: 0,
      isHidden: true,
      isRemoved: false
    },
    {
      id: 2,
      tabs: ['Character','Paragraph'],
      children: [<Character key={1} />, <Paragraph key={2} />],
      tab: 0,
      isHidden: true,
      isRemoved: false
    }
  ],
  '2': [
    {
      id: 1,
      tabs: ['Color', 'Swatches'],
      children: [<Color key={1} />, <Swatches key={2} />],
      tab: 0,
      isHidden: true,
      isRemoved: false
    },
    {
      id: 2,
      tabs: ['Layers'],
      children: <Layers />,
      tab: 0,
      isHidden: true,
      isRemoved: false
    }
  ]
};
import React from 'react';
import {Card} from '..';

import {render, fireEvent} from '../../../utils/testUtils';

const onCardPressMock = jest.fn();

function renderCard() {
  return render(<Card name={'John'} onCardPress={onCardPressMock} />);
}

describe('when the component is rendered', () => {
  it('should show the name', () => {
    const {getByText} = renderCard();
    const name = getByText('John');
    expect(name).toBeTruthy();
  });

  describe('when the card is pressed', () => {
    it('should call onCardPress', async () => {
      const {getByText} = renderCard();
      const cardButton = getByText('John');
      await fireEvent.press(cardButton);
      expect(onCardPressMock).toHaveBeenCalled();
    });
  });
});

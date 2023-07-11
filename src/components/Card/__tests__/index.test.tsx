import React from 'react';
import { Card } from '..';
import { padStart } from 'lodash';
import { render,fireEvent } from '../../../utils/testUtils';


const onCardPressMock = jest.fn()

function renderCard () {
    return render(<Card name={'Ricky'} id={'123'} onCardPress={onCardPressMock} />  )
}

describe('when the component is rendered', ()=> {

    it('should show the id', ()=>{
        const {getByText}= renderCard()
        const name = getByText('#0123  ')
        expect(name).toBeTruthy()
      })
    it('should show the name', ()=>{
      const {getByText}= renderCard()
      const name = getByText('Ricky')
        expect(name).toBeTruthy()
    })

    describe('when the card is pressed', ()=>{
        it('should call onCardPress', async ()=>{
            const {getByText}= renderCard()
            const cardButton = getByText('Ricky')
            await fireEvent.press(cardButton)
            expect(onCardPressMock).toHaveBeenCalled()
          })
    })
  })
  
import React from 'react';




import { CharacterDetails } from '..';
import { padStart } from 'lodash';
import { render } from '../../../utils/testUtils';
import { useGetEpisodes } from '../../../hooks/useGetEpisodes/useGetEpisodes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation';
import { useNavigation } from '@react-navigation/native';
import { characterDetailsMock, episodeListMock } from '../mocks/mocks';


const mockedUseGetEpisodesQuery = useGetEpisodes as jest.Mock<any>;

// Mock the hook module
jest.mock('../../../hooks/useGetEpisodes/useGetEpisodes');


function renderCard () {
    const navigation = { navigation: jest.fn() } as any
  
    return render( <CharacterDetails route={{
        key: '123',
        name: 'CharacterDetails',
        params: {
            data: characterDetailsMock
        }
    }} navigation={navigation}  /> )
}

describe('when the component is rendered', ()=> {
    beforeAll(()=>{
        mockedUseGetEpisodesQuery.mockImplementation(() => ({
            status: 'success',
            data:episodeListMock,
          }));
    })

    it('should show the name', ()=>{
        const {getByText}= renderCard()
        const name = getByText('Name:\nRicky')
        expect(name).toBeTruthy()
      })
      it('should show the species text', ()=>{
        const {getByText}= renderCard()
        const name = getByText('Species:\nspecie')
        expect(name).toBeTruthy()
      })
    it('should show the episode section title', ()=>{
        const {getByText}= renderCard()
        const episodeSectionTitle = getByText('Episodes')
        expect(episodeSectionTitle).toBeTruthy()
    })
    it('should show the episode section list first item', ()=>{
        const {getByText}= renderCard()
        const episodeSectionListFirstItem = getByText('Humberto')
        expect(episodeSectionListFirstItem).toBeTruthy()
    })
  })
  
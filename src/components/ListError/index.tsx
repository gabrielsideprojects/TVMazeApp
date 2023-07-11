import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ErrorContainer, TryAgainText } from './styles';
import { Pressable, Text } from 'react-native';

interface ListErrorProps {
  onPressTryAgain: () => void;
}

export function ListError({ onPressTryAgain }: ListErrorProps) {
  return (
    <ErrorContainer>
      <MaterialIcons name="update" size={25} color={'black'} />
      <Text>Erro ao obter dados</Text>
      <Pressable onPress={onPressTryAgain}>
        <TryAgainText>Tentar novamente.</TryAgainText>
      </Pressable>
    </ErrorContainer>
  );
}

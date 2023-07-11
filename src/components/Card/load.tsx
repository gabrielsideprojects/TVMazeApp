import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {useTheme} from 'styled-components';
import {Divider} from '../Divider';
import {Container} from './styles';

export function CardLoad() {
  const theme = useTheme();
  return (
    <>
      <Divider />
      <Container>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item flexDirection="row">
            <SkeletonPlaceholder.Item
              width={40}
              height={20}
              marginRight={theme.spacing.medium}
            />

            <SkeletonPlaceholder.Item
              width={200}
              height={20}
              marginRight={theme.spacing.medium}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </Container>
    </>
  );
}

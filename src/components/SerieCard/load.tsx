import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Divider} from '../Divider';
import {Container} from './styles';

export function CharacterCardLoad() {
  return (
    <>
      <Divider />
      <Container>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
            <SkeletonPlaceholder.Item
              width={60}
              height={60}
              borderRadius={50}
            />

            <SkeletonPlaceholder.Item marginLeft={20}>
              <SkeletonPlaceholder.Item flexDirection="row" marginBottom={10}>
                <SkeletonPlaceholder.Item width={40} height={20} />
                <SkeletonPlaceholder.Item
                  width={120}
                  height={20}
                  marginLeft={20}
                />
              </SkeletonPlaceholder.Item>

              <SkeletonPlaceholder.Item flexDirection="row">
                <SkeletonPlaceholder.Item width={50} height={20} />
                <SkeletonPlaceholder.Item
                  width={50}
                  height={20}
                  marginLeft={20}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </Container>
    </>
  );
}

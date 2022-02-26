/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useSelector } from "react-redux";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import { ReducerType } from "../../redux/reducers/rootReducer";

const LoadingComponent = () => {
  const { loading } = useSelector((state: ReducerType) => state.loading);

  return (
    <>
      {loading === false ? (
        ""
      ) : (
        <>
          <div>
            <Segment>
              <Dimmer active>
                <Loader content="Loading" />
              </Dimmer>

              <Image src="/images/wireframe/short-paragraph.png" />
            </Segment>
            <Segment>
              <Dimmer active inverted>
                <Loader inverted content="Loading" />
              </Dimmer>

              <Image src="/images/wireframe/short-paragraph.png" />
            </Segment>
          </div>
        </>
      )}
    </>
  );
};

export default LoadingComponent;

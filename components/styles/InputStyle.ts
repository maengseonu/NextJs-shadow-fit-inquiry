import styled from "styled-components";

export const FormContainer = styled.div`
  width: 50%;
  height: 500px;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin-top: 30px;
`;

export const FormRow = styled.div`
  clear: both;
`;

export const LabelDiv = styled.div`
  float: left;
  width: 25%;
  margin-top: 6px;
`;

export const InputDiv = styled.div`
  float: left;
  width: 75%;
  margin-top: 6px;
`;

export const FormLabel = styled.label`
  padding: 12px 12px 12px 0;
  display: inline-block;
  font-weight: 800;
`;

export const FormTitleInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FormTextInput = styled.textarea`
  width: 100%;
  height: 360px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

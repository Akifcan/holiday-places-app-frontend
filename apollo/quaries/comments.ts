import { gql } from "@apollo/client"


export interface CommentQueryProps {
    _id: string,
    body: string,
    createdAt: Date,
    placeId: string,
    profilePhoto: string,
    rate: number,
    username: string
}

export const CREATE_COMMENT_MUTATION = gql`
mutation CREATE_COMMENT($placeId: ID!, $username: String!, $body: String!, $rate: Float!) {
  createComment(
    placeId: $placeId,
    comment: {
      username: $username
      body: $body
      rate: $rate
    }
  ) {
    _id
    username
    profilePhoto
    body
    rate
    placeId
    createdAt
  }
}
`
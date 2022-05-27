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

export interface AveragePointProps {
  count: number,
  avg: number
}

export interface CommentPercentageProps {
  per: number,
  rate: number
}

export const AVERAGE_POINT_QUERY = gql`
  query AVERAGE_POINT($placeId: ID!) {
  averagePoint(placeId: $placeId) {
    count,
    avg
  }
}
`

export const COMMENTS_PERCENTAGE_QUERY = gql`
  query COMMENT_PERCENTAGE($placeId: ID!) {
  commentPercentage(placeId: $placeId) {
    per,
    rate
  }
}
`

export const LIST_COMMENTS_QUERY = gql`
query LIST_COMMENTS($placeId: ID!, $page: Float!) {
  listComments(placeId: $placeId, page: $page) {
    totalPage
    data {
      _id
      username
    profilePhoto
    body
    rate
    placeId
    createdAt
    }
  }
}
`

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
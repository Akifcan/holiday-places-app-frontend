import { gql } from "@apollo/client";

const PLACES_QUERY = gql`
query PLACES ($province: String!, $page: Float!) {
  places(page: $page, province: $province ) {
    totalPage
    data {
      _id,
      name
      logo,
      category,
      photos,
      province
    }
  }
}
`

export default PLACES_QUERY
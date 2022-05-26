import { gql } from "@apollo/client";

export interface PlacesQueryProps {
    _id: string,
    logo: string,
    name: string,
    photos: string[],
    province: string,
    category: string
}

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
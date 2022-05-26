import { gql } from "@apollo/client"

export interface PlacesQueryProps {
  _id: string,
  logo: string,
  name: string,
  photos: string[],
  province: string,
  category: string
}

export const CREATE_PLACE_MUTATION = gql`
   mutation CREATE_PLACE($name: String!, $logo: String!, $photos: [String!]!, $province: String!, $category: Categories!) {
        createPlace(
                place: {
                name: $name
                logo: $logo,
                photos: $photos
                province: $province
              	category: $category
            }
        ){
                _id
                name,
                province,
                logo,
                category,
                photos
            }
        }
`

export const PLACE_QUERY = gql`
query PLACE($id: ID!) {
  place(id: $id) {
      _id,
      name
      logo,
      category,
      photos,
      province
  }
}
`

export const PLACES_QUERY = gql`
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


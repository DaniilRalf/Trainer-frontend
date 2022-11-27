import { Injectable } from '@angular/core';
import {Apollo, gql} from "apollo-angular";

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(
    private apollo: Apollo
  ) { }

  //====изменить тип эни на конкретные
  loginUser(data: any){
    return this.apollo.mutate({
      mutation: gql`
        mutation loginUser($input: UserInput){
          loginUser(input: $input){
            username
            first_name
            last_name
            roleId
            token
          }
        }
      `,
      variables: { input: data },
    })
  }

  getUserPersonalParameters(username: string | null){
    return this.apollo.query({
      query : gql`
        query getUserPersonalParameters($username: String){
          getUserPersonalParameters(username: $username){
            personal {
              gender
              height
              birth_day
              start_train
            }
            parameters {
              weight
              shoulder_bust
              shoulder_girth
              shoulder_hips
              shoulder_hip
              date_metering
            }
          }
        }
      `,
      variables: { username: username },
    })
  }

  createClient(data: any){
    return this.apollo.mutate({
      mutation: gql`
        mutation createClient($input: UserInput){
          createClient(input: $input){
            username
            first_name
            last_name
            password
            roleId
            personal {
              gender
              height
              birth_day
              start_train
            }
          }
        }
      `,
      variables: { input: data },
    })
  }


  //==== удалить лишние коменты

  // getAllUsers(){
  //   return this.apollo.query({
  //       query: gql`
  //         query {
  //           getAllUsers {
  //             id
  //             first_name
  //             role {
  //                 id
  //                 value
  //             }
  //           }
  //         }
  //       `
  //   })
  // }
  //
  // createUser(){
  //   return this.apollo.mutate({
  //     mutation: gql`
  //         mutation {
  //           createUser(input: {
  //             first_name: "test10", last_name: "test10", password: "test10"
  //           }){
  //           first_name
  //           last_name
  //         }
  //       }
  //     `
  //   })
  // }
}
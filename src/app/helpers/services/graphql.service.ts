import { Injectable } from '@angular/core';
import {Apollo, gql} from "apollo-angular";

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(
    private apollo: Apollo
  ) { }

  //TODO: изменить тип эни на конкретные
  loginUser(data: any){
    return this.apollo.mutate({
      mutation: gql`
        mutation loginUser($input: UserInput){
          loginUser(input: $input){
            id
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

  //TODO: переделать с юзернэймв на айди
  //TODO: переименовать с учетом того что тут есть график
  getItemClientAllData(username: string | null){
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
            schedules {
              date
              description
            }
          }
        }
      `,
      variables: { username: username },
    })
  }
  getAllClientsAllData(){
    return this.apollo.query({
        query: gql`
          query {
            getAllClients {
              id
              username
              first_name
              last_name
              roleId
              personal {
                id
                gender
                height
                birth_day
                start_train
              }
              parameters {
                id
                weight
                shoulder_bust
                shoulder_girth
                shoulder_hips
                shoulder_hip
                date_metering
              }
              schedules {
                date
                description
              }
            }
          }
        `
    })
  }
  getAllClientsWithPhoto(){
    return this.apollo.query({
      query: gql`
          query {
            getAllClients {
              id
              username
              first_name
              last_name
              roleId
            }
          }
        `
    })
  }

  createTrainingDays(data: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation createTrainingDays($input: UserInput){
          createTrainingDays(input: $input){
            id
          }
        }
      `,
      variables: { input: data },
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
  eventWithParameterClient(data: any){
    return this.apollo.mutate({
      mutation: gql`
        mutation createParametersClient($input: UserInput){
          createParametersClient(input: $input){
            id
          }
        }
      `,
      variables: { input: data },
    })
  }
  updatePersonalClient(data: any){
    return this.apollo.mutate({
      mutation: gql`
        mutation updatePersonalClient($input: PersonalInput){
          updatePersonalClient(input: $input){
            id
          }
        }
      `,
      variables: { input: data },
    })
  }


}

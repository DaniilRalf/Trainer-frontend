import { Injectable } from '@angular/core'
import {Apollo, gql, MutationResult} from "apollo-angular"
import {ApolloQueryResult} from "@apollo/client/core";
import {Observable} from "rxjs";
import {Feed, User} from "../../models/types/user";


//TODO: types

@Injectable({providedIn: 'root'})
export class GraphqlService {

  constructor(
    private apollo: Apollo
  ) { }

  /** FOR ALL USER================================================ */
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
            is_active
            token
          }
        }
      `,
      variables: { input: data },
    })
  }
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
              time_start
              time_duration
            }
          }
        }
      `,
      variables: { username: username },
    })
  }
  /** FOR ALL USER================================================ */

  /** FOR ADMIN=================================================== */
  /** create */
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
            is_active
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
  /** update */
  updateActiveClient(data: {id: number, active: boolean}): Observable<MutationResult<{updateActiveClient: User[]}>> {
    return this.apollo.mutate({
      mutation: gql`
        mutation updateActiveClient($input: UserInput){
          updateActiveClient(input: $input){
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
  updateFeedClient(data: {id: number, feed: Feed}): Observable<MutationResult<{updateFeedClient: User[]}>>{
    return this.apollo.mutate({
      mutation: gql`
        mutation updateFeedClient($input: UserInput){
          updateFeedClient(input: $input){
            id
          }
        }
      `,
      variables: { input: data },
    })
  }
  /** get */
  getAllClientsAllData(): Observable<ApolloQueryResult<{getAllClients: User[]}>>{
    return this.apollo.query({
      query: gql`
          query {
            getAllClients {
              id
              username
              first_name
              last_name
              roleId
              is_active
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
  getAllClientsFeed(): Observable<ApolloQueryResult<{getAllClients: User[]}>>{
    return this.apollo.query({
      query: gql`
          query {
            getAllClients {
              id
              username
              first_name
              last_name
              roleId
              is_active
              feed {
                id
                protein
                fat
                carbohydrates
                recommendation
              }
            }
          }
        `
    })
  }
  getAllClientsSchedules(): Observable<ApolloQueryResult<{getAllClients: User[]}>>{
    return this.apollo.query({
      query: gql`
          query {
            getAllClients {
              id
              username
              first_name
              last_name
              is_active
              schedules {
                id
                date
                description
                time_start
                time_duration
              }
            }
          }
        `
    })
  }
  getItemClientSchedules(data: {id: number}): Observable<ApolloQueryResult<{getItemClient: User}>>{
    return this.apollo.query({
      query: gql`
          query getItemClient($input: UserInput){
            getItemClient(input: $input){
              id
              username
              first_name
              last_name
              is_active
              schedules {
                id
                date
                description
                time_start
                time_duration
              }
            }
          }
        `,
      variables: { input: data },
    })
  }
  getAllClientsWithPhoto(): Observable<ApolloQueryResult<{getAllClients: User[]}>>{
    return this.apollo.query({
      query: gql`
          query {
            getAllClients {
              id
              username
              first_name
              last_name
              roleId
              is_active
              photos {
                id
                file_name
                date
                angle
                type
              }
            }
          }
        `
    })
  }
  /** FOR ADMIN=================================================== */

  /** FOR CLIENT=================================================== */
  /** FOR CLIENT=================================================== */


  eventWithParameterClient(data: any){
    return this.apollo.mutate({
      mutation: gql`
        mutation eventWithParameterClient($input: UserInput){
          eventWithParameterClient(input: $input){
            id
          }
        }
      `,
      variables: { input: data },
    })
  }
}

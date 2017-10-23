import gql from 'graphql-tag';

export const IdeaDetailQuery = gql`
  query IdeaDetailQuery($slug: String!) {
    Idea(slug: $slug) {
      id
      title
      tagline
      displayOrder
      slug
      description
      category
      courseraVideoUrl
      coverBackgroundUrl
      howToContribute
      slackUrl
      youtubeVideoUrl
      createdAt
      updatedAt
      createdBy {
        name
        id
      }
      contributors {
        name
        id
      }
      likes {
        id
        user {
          id
        }
      }
    }
  }
`;

export const IdeaListQuery = gql`
  query IdeaListQuery($isPresenting: Boolean) {
    allIdeas(filter: { isPresenting: $isPresenting }) {
      id
      title
      tagline
      displayOrder
      slug
      description
      coverBackgroundUrl
      isPresenting
      createdAt
      contributors {
        name
      }
      createdBy {
        name
        id
      }
      likes {
        id
        user {
          id
        }
      }
    }
  }
`;

export const IdeaNextQuery = gql`
  query IdeaNextQuery($first: Int, $after: String) {
    allIdeas(first: $first, after: $after) {
      id
      slug
      title
    }
  }
`;

export const IdeaPrevQuery = gql`
  query IdeaPrevQuery($last: Int, $before: String) {
    allIdeas(last: $last, before: $before) {
      id
      slug
      title
    }
  }
`;

export const IdeaEditQuery = gql`
  query IdeaEditQuery($slug: String!) {
    Idea(slug: $slug) {
      id
      contributorsText
      category
      courseraVideoUrl
      coverBackgroundUrl
      description
      displayOrder
      estimatedFinishTime
      howToContribute
      needMyLaptop
      presentLive
      isPresenting
      slackUrl
      slug
      startTime
      tagline
      title
      youtubeVideoUrl
      createdBy {
        name
        id
      }
      contributors {
        name
        id
      }
    }
  }
`;

export const CreateIdeaMutation = gql`
  mutation createIdeaMutation(
    $contributorsIds: [ID!]
    $contributorsText: String
    $createdById: ID
    $makeathonId: ID
    $category: [IdeaCategory!]
    $courseraVideoUrl: String
    $coverBackgroundUrl: String!
    $description: String!
    $displayOrder: Int!
    $estimatedFinishTime: DateTime!
    $howToContribute: String!
    $needMyLaptop: Boolean
    $presentLive: Boolean
    $isPresenting: Boolean
    $slackUrl: String
    $slug: String!
    $startTime: DateTime!
    $tagline: String!
    $title: String!
    $youtubeVideoUrl: String
  ) {
    createIdea(
      contributorsIds: $contributorsIds
      contributorsText: $contributorsText
      createdById: $createdById
      makeathonId: $makeathonId
      category: $category
      courseraVideoUrl: $courseraVideoUrl
      coverBackgroundUrl: $coverBackgroundUrl
      description: $description
      displayOrder: $displayOrder
      estimatedFinishTime: $estimatedFinishTime
      howToContribute: $howToContribute
      needMyLaptop: $needMyLaptop
      presentLive: $presentLive
      isPresenting: $isPresenting
      slackUrl: $slackUrl
      slug: $slug
      startTime: $startTime
      tagline: $tagline
      title: $title
      youtubeVideoUrl: $youtubeVideoUrl
    ) {
      id
      category
      title
      description
      tagline
      slug
    }
  }
`;

export const UpdateIdeaMutation = gql`
  mutation updateIdeaMutation(
    $id: ID!
    $contributorsIds: [ID!]
    $contributorsText: String
    $createdById: ID
    $makeathonId: ID
    $category: [IdeaCategory!]
    $courseraVideoUrl: String
    $coverBackgroundUrl: String!
    $description: String!
    $displayOrder: Int!
    $estimatedFinishTime: DateTime!
    $howToContribute: String!
    $needMyLaptop: Boolean
    $presentLive: Boolean
    $isPresenting: Boolean
    $slackUrl: String
    $slug: String!
    $startTime: DateTime!
    $tagline: String!
    $title: String!
    $youtubeVideoUrl: String
  ) {
    updateIdea(
      id: $id
      contributorsIds: $contributorsIds
      contributorsText: $contributorsText
      createdById: $createdById
      makeathonId: $makeathonId
      category: $category
      courseraVideoUrl: $courseraVideoUrl
      coverBackgroundUrl: $coverBackgroundUrl
      description: $description
      displayOrder: $displayOrder
      estimatedFinishTime: $estimatedFinishTime
      howToContribute: $howToContribute
      needMyLaptop: $needMyLaptop
      presentLive: $presentLive
      isPresenting: $isPresenting
      slackUrl: $slackUrl
      slug: $slug
      startTime: $startTime
      tagline: $tagline
      title: $title
      youtubeVideoUrl: $youtubeVideoUrl
    ) {
      id
      category
      title
      description
      tagline
      slug
      contributorsText
    }
  }
`;

export const DeleteIdeaMutation = gql`
  mutation deleteIdeaMutation($id: ID!) {
    deleteIdea(id: $id) {
      id
      title
      slug
    }
  }
`;

export const IdeaLikeMutation = gql`
  mutation IdeaLikeMutation($ideaId: ID!, $userId: ID!) {
    createLike(ideaId: $ideaId, userId: $userId) {
      id
      createdAt
      idea {
        id
        title
        likes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`;

export const IdeaUnlikeMutation = gql`
  mutation IdeaUnlikeMutation($myLikeId: ID!) {
    deleteLike(id: $myLikeId) {
      createdAt
      id
      idea {
        id
        likes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;
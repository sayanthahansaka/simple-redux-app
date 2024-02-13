import { FETCH_BUTTON_CLICKED } from "./types"

export const fetchPost = () => {
    return {
      type: FETCH_BUTTON_CLICKED,
      payload: [
        {
            userId: 1,
            id: 1,
            title: 'Fake Title',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            userId: 2,
            id: 2, // Unique ID for the second object
            title: 'Fake Title 2',
            body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
          { 
            userId: 3,
            id: 11, // Unique ID
            title: 'Fake Title 11',
            body: 'Longer body for Fake Title 11. This is a longer body text to demonstrate how to include a longer body for each post in the payload.',
          },{
            userId: 4,
            id: 12, // Unique ID
            title: 'Fake Title 12',
            body: 'Longer body for Fake Title 12. This is a longer body text to demonstrate how to include a longer body for each post in the payload.',
          },
          {
            userId: 5,
            id: 13,
            title: 'Fake Title 13',
            body: 'Longer body for Fake Title 13. This is a longer body text to demonstrate how to include a longer body for each post in the payload.',
          },
          {
            userId: 6,
            id: 14,
            title: 'Fake Title 14',
            body: 'Longer body for Fake Title 14. This is a longer body text to demonstrate how to include a longer body for each post in the payload.',
          },
          {
            userId: 7,
            id: 15,
            title: 'Fake Title 15',
            body: 'Longer body for Fake Title 15. This is a longer body text to demonstrate how to include a longer body for each post in the payload.',
          },
          {
            userId: 8,
            id: 16,
            title: 'Fake Title 16',
            body: 'Longer body for Fake Title 16. This is a longer body text to demonstrate how to include a longer body for each post in the payload.',
          }
      ]
    }
  }
  
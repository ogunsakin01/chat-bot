const actions = {
        welcome: {
            title: 'Hello dear. What will you like us to do for you today?',
            input: 'options',
            data: {
                title: 'Click on one',
                options: [
                    {
                        action: 'book-flight',
                        title: 'Book Flight',
                        message: 'I will like to book a flight today'
                    },
                    {
                        action: 'book-hotel',
                        title: 'Book Hotel',
                        message: 'I will like to book a hotel today'
                    },
                ]
            }
        },
        destination: {
            title: 'Where are you going to ?',
            input: 'airport',
            data: {
                'title': 'Select an airport'
            }
        },
        departure: {
            title: 'Where are you leaving from?',
            input: 'airport',
            data: {
                'title': 'Select and airport'
            }
        },
        departure_date: {
            title: 'When are you leaving?',
            input: 'date',
            data: {
                'title': 'Select a date'
            }
        },
        return: {
            title: 'Will you like us to reserve a return ticket for you',
            input: 'options',
            data: {
                title: 'Select an option',
                options: [
                    {
                        action: 'yes',
                        title: 'Yes',
                        message: 'I want a return ticket'
                    },
                    {
                        action: 'no',
                        title: 'No',
                        message: 'I do not want a return ticket'
                    }
                ]
            }
        },
        return_date: {
            title: 'When are you coming back?',
            input: 'date',
            data: {
                title: 'Select a date',
            }
        },
        airline: {
            title: 'Do you have an airline in mind?',
            input: 'options',
            data: {
                title: 'Select an option',
                options: [
                    {
                        action: 'yes',
                        title: 'Yes',
                        message: 'I do'
                    },
                    {
                        action: 'no',
                        title: 'No',
                        message: 'I do not'
                    },
                ]
            }
        },
        preferred_airline: {
            title: 'Select an airline',
            input: 'airline',
            data: {
                title: 'Select and airline'
            }
        },
        cabin: {
            title: 'Do you have a cabin in mind?',
            input: 'options',
            data: {
                title: 'Select an option',
                options: [
                    {
                        action: 'economy',
                        title: 'Economy',
                        message: 'M'
                    },
                    {
                        action: 'first',
                        title: 'First Class',
                        message: 'F'
                    },
                    {
                        action: 'business',
                        title: 'Business Class',
                        message: 'C'
                    },
                    {
                        action: 'premium',
                        title: 'Yes',
                        message: 'W'
                    },
                ]
            }
        }
};
module.exports = actions;

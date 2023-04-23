// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import dayjs from "dayjs";

export const SITE_TITLE = 'Enodd';
export const SITE_AUTHOR_AGE = dayjs().diff(dayjs('2002-09-25'), 'year');
export const SITE_AUTHOR = 'Damian Nowak'

export const SiteConfig = {
    site: {
        title: 'enodd.github.io',
        description: 'Portfolio website of Damian \'Enodd\' Nowak',
    },
    author: {
        name: 'Damian Nowak',
        age: dayjs().diff(dayjs('2002-09-25'), 'year')
    }
}
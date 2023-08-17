import { screen, render} from '@testing-library/react'
import RepositoriesSummary from './RepositoriesSummary';
test('should display stargazers_count, open_issues, forks, language', ()=> {

    const repository = {
        language: 'Rust',
        stargazers_count: 1000,
        open_issues:5,
        forks: 69,
    }

    render(<RepositoriesSummary repository={repository} />)


    for (let key in repository) {
        const value = repository[key]
        const element = screen.getByText(new RegExp(value))

        expect(element).toBeInTheDocument()
    }

})


test('should display stargazers_count, open_issues, forks, language 2', ()=> {

    const repository = {
        language: 'Rust',
        stargazers_count: 1000,
        open_issues:5,
        forks: 69,
    }

    render(<RepositoriesSummary repository={repository} />)

    const language = screen.getByText(/Rust/i)
    const testValues = [
        {property:parseInt(screen.getByText(/69/).textContent), expected: 69 },
        {property:parseInt(screen.getByText(/1000/).textContent),expected: 1000 },
        {property:parseInt(screen.getByText(/5/).textContent), expected: 5 },
    ]

    for (const { property, expected } of testValues) {
        expect(property).toEqual(expected);
    }

     expect(language).toBeInTheDocument()
})

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';

import View from './view.jsx';

describe('Header', () => {
	it('It renders with a name', () => {
		render(
			<MemoryRouter>
				<View
					name={'Axel'}
				/>
			</MemoryRouter>
		);

		expect(screen.getAllByText(new RegExp('Coucou Axel', 'i'))[0]).toBeInTheDocument();
	});
});

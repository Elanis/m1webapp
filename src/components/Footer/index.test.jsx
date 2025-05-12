import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import View from './view.jsx';

describe('Footer', () => {
	it('It renders', () => {
		render(
			<View
				navigate={() => {}}
			/>
		);

		expect(screen.getAllByText(new RegExp('Footer', 'i'))[0]).toBeInTheDocument();
		/// === expect(screen.getAllByText(/Footer/i)[0]).toBeInTheDocument();
	});
});

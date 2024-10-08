import { renderHook } from '@testing-library/react';
import { useForm } from '../../lib';
import { act, ChangeEvent } from 'react';

const testForm = { test: '' };
const testFormErrors = {
	test: false,
};
const testFormValidators = {
	test: (value:string) => value && value.length && /[A-Za-z0-9]+/.test(value),
};

const fillEvent = {
	target: {
		value: 'test',
		name: 'test',
	},
};
const emptyEvent = {
	target: {
		value: '',
		name: 'test',
	},
};

test('Form should have correct default value', () => {
	const { result } = renderHook(() =>
		useForm(testForm, testFormErrors, testFormValidators)
	);

	expect(result.current.form.test).toBe(testForm.test);
});

test('Form should have no errors', () => {
	const { result } = renderHook(() =>
		useForm(testForm, testFormErrors, testFormValidators)
	);

	expect(result.current.errors.test).toBe(false);
});

test('Form should update value with hanldeChange', () => {
	const { result } = renderHook(() =>
		useForm(testForm, testFormErrors, testFormValidators)
	);
	act(() => {
		result.current.handleChange(fillEvent as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
	});

	expect(result.current.form.test).toBe(fillEvent.target.value);
});

test('Form should reset to start value after change', () => {
	const { result } = renderHook(() =>
		useForm(testForm, testFormErrors, testFormValidators)
	);
	act(() => {
		result.current.handleChange(fillEvent as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
	});

	expect(result.current.form.test).toBe(fillEvent.target.value);

	act(() => {
		result.current.handleReset();
	});
	expect(result.current.form.test).toBe(testForm.test);
});

test('Form should be submittable after blur', () => {
	const { result } = renderHook(() =>
		useForm(testForm, testFormErrors, testFormValidators)
	);

	act(() => {
		result.current.handleBlur(fillEvent as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
	});

	expect(result.current.form.test).toBe(fillEvent.target.value);
	expect(result.current.submittable).toBe(true);
});

test('Form should reset error to false after focus', () => {
	const { result } = renderHook(() =>
		useForm(testForm, testFormErrors, testFormValidators)
	);

	act(() => {
		result.current.handleBlur(emptyEvent as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
	});

	expect(result.current.form.test).toBe(emptyEvent.target.value);
	expect(result.current.errors.test).toBe(true);

	act(() => {
		result.current.handleFocus(emptyEvent as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
	});

	expect(result.current.errors.test).toBe(false);
});

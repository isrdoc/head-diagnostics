"use client";

import { useActionState, useEffect } from "react";
import Link from "next/link";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  deleteInvoice,
  State,
} from "@/app/(pages)/dashboard/(pages)/invoices/api/invoices-actions";
import toast from "react-hot-toast";

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(
    deleteInvoice.bind(null, id),
    initialState
  );

  useEffect(() => {
    if (state?.message) {
      toast.error(state.message);
      state.message = null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.message]);

  return (
    <form action={formAction}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
